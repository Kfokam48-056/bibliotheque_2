import '@testing-library/jest-dom'
import { server } from '../../mocks/server';

vi.stubEnv('VITE_API_URL' , 'https://jsonplaceholder.typicode.com')

// Démarrer le serveur MSW avant tous les tests
beforeAll(() => server.listen());

// Réinitialiser les handlers MSW après chaque test
afterEach(() => server.resetHandlers());

// Arrêter le serveur MSW après tous les tests
afterAll(() => server.close());