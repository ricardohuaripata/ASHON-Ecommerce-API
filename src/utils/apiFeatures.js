import catchAsync from './catchAsync';
import AppError from './appError';

const apiFeatures = catchAsync(async (req, model, populate) => {
  // Create a base query
  let query = model;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit', 'filter'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Apply filters
  if (req.query.filter) {
    const filter = JSON.parse(req.query.filter);

    for (const key in filter) {
      query = query.find({ [key]: filter[key] });
    }
  }

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',');
    const obj = {};

    for (const field of sortBy) {
      obj[field] = 1; // 1 for ascending, -1 for descending
    }

    query = query.sort(obj);
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  // Executing query
  query = await query;

  return query;
});

export default apiFeatures;
