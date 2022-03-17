const apiDoc = {
  "openapi": "3.0.0",
  "info": {
    "version": "1.0.0", //版本號
    "title": "Student API", //swagger文件的標頭
    "description": "This is a student API for CRUD." //swagger描述
  },
  "tags": [
    {
      "name": "Students",
      "description": "RESTful API for student system"
    },
    {
      "name": "Products",
      "description": "RESTful API for product system"
    }
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/students": {
      "get": {
        "tags": [
          "Students"
        ],
        "summary": "Get all students",
        "produces": ["application/json"],
        "responses": {
          "200": { //用statuCode做分類
            "description": "OK",
            "content": { //內容
              "application/json": { //response格式
                "schema": { //response要吃什麼樣的model
                  "$ref": "#/definitions/Students"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Students"
        ],
        "summary": "Create a new student",
        "requestBody": {
          "description": "Students Object",
          "required": true, //告訴前端一定要帶以下數值
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/definitions/Students"
              }
            }
          }
        },
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Students"
            }
          },
        }
      }
    },
    "/students/{id}": {
      "patch": {
        "tags": ["Students","Products"],
        "summary": "Update students age",
        "parameters": [ //更新的參數要怎麼帶?
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "Student id"
          }
        ],
        "requestBody": {
          "description": "update student for age",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "age": {
                    "type": "integer"
                  }
                }
              }
            }
          },
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "example": {
                  "message": "update successfully"
                }
              }
            }
          },
        }
      },
      "delete": {
        "tags": ["Students"],
        "summary": "Delete students",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "Student id"
          }
        ],
        "responses": {
          "204": {
            "description": "OK",
            "content": {
              "application/json": {
                "example": {
                  "message": "delete successfully"
                }
              }
            }
          },
        }
      }
    }
  },
  "definitions": {
    "Students": {
      "type": "object", //資料表物件
      "properties": { //資料表屬性
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "age": {
          "type": "integer"
        },
        "email": {
          "type": "string"
        },
        "department": {
          "type": "string"
        }
      }
    }
  },
}

module.exports = apiDoc