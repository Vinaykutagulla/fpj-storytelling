import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { ApplicationRecord } from './applicationStore';

const STORAGE_DIR = path.join(process.cwd(), 'data');
const APPLICATIONS_FILE = path.join(STORAGE_DIR, 'applications.json');

export class FileStorage {
  private static async ensureDataDir() {
    if (!existsSync(STORAGE_DIR)) {
      await mkdir(STORAGE_DIR, { recursive: true });
    }
  }

  static async saveApplications(applications: ApplicationRecord[]) {
    try {
      await this.ensureDataDir();
      await writeFile(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
      console.log('Applications saved to file:', applications.length);
    } catch (error) {
      console.error('Failed to save applications to file:', error);
    }
  }

  static async loadApplications(): Promise<ApplicationRecord[]> {
    try {
      if (!existsSync(APPLICATIONS_FILE)) {
        console.log('No applications file found, starting fresh');
        return [];
      }
      
      const data = await readFile(APPLICATIONS_FILE, 'utf-8');
      const applications = JSON.parse(data) as ApplicationRecord[];
      console.log('Applications loaded from file:', applications.length);
      return applications;
    } catch (error) {
      console.error('Failed to load applications from file:', error);
      return [];
    }
  }

  static async addApplication(application: ApplicationRecord) {
    try {
      const existing = await this.loadApplications();
      existing.push(application);
      await this.saveApplications(existing);
      return true;
    } catch (error) {
      console.error('Failed to add application to file:', error);
      return false;
    }
  }
}