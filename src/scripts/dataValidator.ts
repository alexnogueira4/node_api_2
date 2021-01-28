import { createValidator } from 'express-joi-validation'
const validator = createValidator()

const DataValidator = data => validator.query(data)

export default DataValidator;