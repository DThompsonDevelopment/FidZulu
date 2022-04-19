const request = require("request");
const base_url = 'http://localhost:3022/media/team';

const expected = {
    "team": "media",
    'membersNames': [
        'Ty Crawford',
        'Dev Patel',
        'Pranav Chaloori'
    ]
};

describe('Testing Team Endpoint', () => {
    it('returns a list of team members', (done) => {
        request.get(base_url, (error, response, body) => {
            expect(body).toBe(expected);
            done();
        })
    })
});