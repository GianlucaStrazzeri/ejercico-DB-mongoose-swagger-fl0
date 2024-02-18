// documentación de los diferentes endpoints
module.exports = {
    paths: {
      "/create": {
        post: {
          tags: { Task: "Create a task",},
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {content: { "application/json": { schema: {$ref: "#/components/schemas/Task", }, },},},
          responses: {201: {description: "Task successfully created",},500: {description: "There was a problem trying to create a task",},},
        }
      },


      "/get/": {
        post: {
          tags: { Task: "Read a task",},
          description: "Read Task",
          operationId: "readTask",
          parameters: [],
          requestBody: {content: { "application/json": { schema: {$ref: "#/components/schemas/Task", }, },},},
          responses: {201: {description: "Task successfully created",},500: {description: "There was a problem trying to create a task",},},
        }
      },






      "/id/{_id}": {
        put: {
          tags: {Tasks: "Update a task", },
          description: "Update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {$ref: "#/components/schemas/_id",},
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {content: { "application/json": {schema: { $ref: "#/components/schemas/Task" },},}, },
          responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
          },
        },
      },





      "/delete/id/:_id/": {
        post: {
          tags: { Task: "Delete a task",},
          description: "Delete Task",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {$ref: "#/components/schemas/_id",},
              description: "Id of Task to be delete",
            },
          ],
          requestBody: {content: { "application/json": { schema: {$ref: "#/components/schemas/Task", }, },},},
          responses: {201: {description: "Task deleted ",},500: {description: "There was a problem trying to delete a task",},},
        }
      },


    },
  };
  