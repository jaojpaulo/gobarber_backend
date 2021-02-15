import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(paylaod: string): Promise<string> {
    return paylaod;
  }

  public async compareHash(paylaod: string, hashed: string): Promise<boolean> {
    return paylaod === hashed;
  }
}

export default BCryptHashProvider;
