{
	"info": {
		"_postman_id": "abb2b60a-24ff-41ff-ab3a-d3887257b926",
		"name": "Tests NODE_API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Create User",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"",
							"pm.environment.set(\"userId\", pm.response.json()._id);"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Joaos\",\n    \"username\": \"51 98181s-8181\",\n    \"password\": \"123456\",\n    \"email\": \"joaoa@joasso.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Get User By Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{baseURL}}users/{{userId}}",
					"host": [
						"{{baseURL}}users"
					],
					"path": [
						"{{userId}}"
					]
				},
				"description": "-"
			},
			"response": []
		},
		{
			"name": "Get All Users",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{baseURL}}users/",
					"host": [
						"{{baseURL}}users"
					],
					"path": [
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete User",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{baseURL}}users/{{userId}}",
					"host": [
						"{{baseURL}}users"
					],
					"path": [
						"{{userId}}"
					]
				}
			},
			"response": []
		}
	]
}