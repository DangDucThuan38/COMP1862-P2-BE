# Final Year Project (part 2) - Backend course
## 1. Techniques: 
- NodeJS: JavaScript runtime
   
- ExpressJS: NodeJS's framework

- Handlebars (hbs): NodeJS's template engine
   
- MongoDB: NoSQL database
## 2. Softwares: 
- VS Code 
   
- NodeJS  
   
- MongoDB Server + MongoDB Compass
## 3. Schedule:
### Lesson 1: (3 slots)
- Setup working environment

- Create database, collection (table), insert document (row) with MongoDB Compass 

- Initialize demo project using ExpressJS framework and Handlebars engine

- Install libraries: *nodemon, mongoose, body-parser*

- Setup connection from ExpressJS to MongoDB 

- Setup relationship between collections (One to Many)

- Form input **validation**: client-side, server-side

- Implement **CRUD** features 
### Lesson 2: (3 slots)
- Implement features: **search, sort**

- Install libraries: *express-session, bcryptjs*

- **Authentication** (login/logout + register)

- **Authorization**  (role-based access: admin, user,...)

- **Password encryption**
### Lesson 3: (2 slots)
- Install libraries: *multer, axios*

- **File/image upload**

- **Fetch API**
### Lesson 4: (2 slots)
- Install libraries: *cors, jsonwebtoken*

- Create and enable **API sharing** (for consuming API in front-end)

- Create **JSON Web Token** (for authentication in front-end)
1. Tạo project Express với template/view engine là HBS (Handlebars)
  npx express-generator --view=hbs
2. Cài đặt tất cả các thư viện cần thiết để chạy project
  npm install
3. Cài đặt thư viện nodemon (node monitor) để tự động reload server khi update code
  npm install nodemon -g
4. Cài đặt thư viện mongoose để kết nối và làm việc với MongoDB
  npm install mongoose --save
5. Cài đặt thư viện body-parser để lấy dữ liệu từ client-side (form, URL)
  npm install body-parser --save
6A. Chạy project (khi đang code)
 nodemon
6B. Chay project (khi code xong)
node app



