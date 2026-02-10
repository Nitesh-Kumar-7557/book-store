## Run in your Machine
git clone https://github.com/Nitesh-Kumar-7557/book-store/ \
cd book-store

cd backend \
pnpm i \
(Install docker then->) docker-compose up -d \
touch .env
- PORT=8000
- DATABASE_URL=postgres://postgres:admin@localhost:5432/book-db

pnpm dev \
pnpm drizzle-kit push \
pnpm drizzle-kit studio

cd ../frontend \
npm i \
npm run dev

## Next Steps
Send a POST request at http://localhost:8000/books with an array of books data as object ( can do with Postman ), e.g :- 

[ \
&nbsp;&nbsp;&nbsp; { \
    &nbsp;&nbsp;"name": "The Silent Forest", \
    &nbsp;&nbsp;"description": "A mysterious journey through an ancient forest filled with secrets and forgotten legends.", \
    &nbsp;&nbsp;"author": "Aarav Mehta" \
&nbsp;&nbsp;&nbsp;  } \
]

You can view the database with the drizzle studio link. \
Then check the React Frontend &nbsp; :) 😀
