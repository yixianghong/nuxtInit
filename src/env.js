const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const BUILD_STAGE = process.env.NODE_ENV || 'local'

const configPath = path.resolve(process.cwd(), `./.env.${BUILD_STAGE}`)

dotenv.config({ path: configPath })
