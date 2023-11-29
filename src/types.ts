export type RawUser = {
  id: Buffer
  username: string
  email: string
}

export type ResponseUser = Omit<RawUser, 'id'> & { id: string }
