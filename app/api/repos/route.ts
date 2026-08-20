import { NextResponse } from 'next/server';

export async function GET() {
	const token = process.env.GITHUB_TOKEN;

	if (!token) {
		return NextResponse.json(
			{ error: 'GitHub token is not configured' },
			{ status: 500 }
		);
	}

	const response = await fetch(
		'https://api.github.com/user/repos?sort=updated&per_page=100',
		{
			headers: {
				'Accept': 'application/vnd.github+json',
				'Authorization': `Bearer ${token}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
			cache: 'no-store',
		}
	);

	if (!response.ok) {
		return NextResponse.json(
			{ error: 'GitHub failed to return repositories' },
			{ status: response.status }
		);
	}

	return NextResponse.json(await response.json());
}
