type RawUser = {
  id: Buffer;
  username: string;
  email: string;
};

type ResponseUser = Omit<RawUser, 'id'> & { id: string };
