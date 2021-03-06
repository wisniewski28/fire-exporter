import * as yup from 'yup';
import { ObjectSchemaDefinition } from 'yup';

class CollectionsExporter<T extends object> {
  static rules: ObjectSchemaDefinition<CollectionsExporter<object>> = {
    zipped: yup.number(),
    collections: yup.mixed().required('At least one collection is required'),
  };
}

export default CollectionsExporter;
