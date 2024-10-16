// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema';
import { ObjectIdSchema } from '@feathersjs/schema';
import { dataValidator, queryValidator } from '../../validators.js';

// Main data model schema
export const commentsSchema = {
  $id: 'Comments',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' },
  },
};
export const commentsValidator = getValidator(commentsSchema, dataValidator);
export const commentsResolver = resolve({});

export const commentsExternalResolver = resolve({});

// Schema for creating new data
export const commentsDataSchema = {
  $id: 'CommentsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...commentsSchema.properties,
  },
};
export const commentsDataValidator = getValidator(commentsDataSchema, dataValidator);
export const commentsDataResolver = resolve({});

// Schema for updating existing data
export const commentsPatchSchema = {
  $id: 'CommentsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...commentsSchema.properties,
  },
};
export const commentsPatchValidator = getValidator(commentsPatchSchema, dataValidator);
export const commentsPatchResolver = resolve({});

// Schema for allowed query properties
export const commentsQuerySchema = {
  $id: 'CommentsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(commentsSchema.properties),
  },
};
export const commentsQueryValidator = getValidator(commentsQuerySchema, queryValidator);
export const commentsQueryResolver = resolve({});
