import { UsersService } from './users.service';

describe('UserService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('should return stream of users', (done: DoneFn) => {
    service.getUsers().subscribe((received) => {
      expect(received.length).toBe(8);
      done();
    });
  });
});
