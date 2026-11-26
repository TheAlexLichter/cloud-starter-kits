import type { Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, expect, test } from 'vite-plus/test';
import { app } from '../src/app.ts';

let server: Server;
let baseUrl: string;

beforeAll(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    baseUrl = `http://localhost:${(server.address() as AddressInfo).port}`;
});

afterAll(() => {
    server.close();
});

test('the welcome page responds', async () => {
    const response = await fetch(`${baseUrl}/`);

    expect(response.status).toBe(200);
    const html = await response.text();

    expect(html).toMatch(/Your Express app is up and running on Laravel Cloud\./);
    expect(html).toContain(`Node.js ${process.versions.node}`);
});

test('the api responds', async () => {
    const response = await fetch(`${baseUrl}/api`);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: 'Hello from Laravel Cloud' });
});
