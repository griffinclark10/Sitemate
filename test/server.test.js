const request = require('supertest');
const app = require('../server');

//test create issues
describe('POST /issues', () => {
    it('should create a new issue and return 201 status', async () => {
      const response = await request(app)
        .post('/issues')
        .send({
          title: 'Test Issue',
          description: 'This is a test issue'
        });
  
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Issue created');
        expect(response.body.data).toHaveProperty('id');
        expect(response.body.data.title).toBe('Test Issue');
        expect(response.body.data.description).toBe('This is a test issue');
    });
});

//test read issues
describe('GET /issues', () => {
    it('should fetch all issues and return 200 status', async () => {
        const response = await request(app).get('/issues');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('data');
        expect(response.body.data.length).toBeGreaterThan(0);
    });
});

//test update issues
describe('PUT /issues/:id', () => {
    it('should update an issue and return 200 status', async () => {
      const issueId = 1; // Adjust this to an existing issue ID in your database or mock data
      const response = await request(app)
        .put(`/issues/${issueId}`)
        .send({
          title: 'Updated Test Issue',
          description: 'This is an updated test issue'
        });
  
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe(`Issue ${issueId} updated`);
      expect(response.body.data.title).toBe('Updated Test Issue');
    });
});

//test delete issues
describe('DELETE /issues/:id', () => {
    it('should delete an issue and return 200 status', async () => {
      const issueId = 1; // Adjust this to an existing issue ID in your database or mock data
      const response = await request(app).delete(`/issues/${issueId}`);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe(`Issue with ID: ${issueId} deleted`);
    });
  });
  
  