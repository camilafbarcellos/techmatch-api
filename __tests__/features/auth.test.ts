import request from 'supertest';
import app from '../../src/app';
import { adminInput, invalidAdminInput } from '../fixtures/auth.fixture';

describe('POST /auth', () => {
    describe('given credentials are valid', () => {
        it('should return a JWT token (200)', async () => {
            const res = await request(app)
                .post('/auth')
                .send(adminInput);
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({ accessToken: expect.any(String) });
        });
    });

    describe('given credentials are invalid', () => {
        it('should return an unauthorized status (401)', async () => {
            const res = await request(app)
                .post('/auth')
                .send(invalidAdminInput);
            expect(res.statusCode).toBe(401);
        });
    });
});