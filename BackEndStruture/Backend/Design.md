## Architecture Design

node server
MVC
RESTful

### 1. Collections / Model
- Users
  - Avatar
  - Username
  - Password
  - Email
  - Active
  
- Images
  - ImageUrl
  - Title
  - Description
  - CreatedAt
  - CreatedBy
  - View
  - Like
  - Active
  - Comment
    - CreatedBy
    - Content

### 2. Controller
CRUD
 - Create
 - Read - Get items with Active == true
 - Update
 - Delete - Never really delete item: delete action = set Active to false

### 3. Route / RESTful
Modern day:
  - Backend rendering is not popular
  - Backend return data instead of HTML
    - node: JSON
  - API: RESTful
  - URI are all nouns
  - Type of Action is determined by request method
<!-- Image -->
URI: /api/images/
POST -> /api/images/ = create new girlImage
GET -> /api/images/?page = read all Images

GET -> /api/images/:id = read one girlImage
req.params.id
PUT -> /api/images/:id = update one girlImage
DELETE -> /api/images/:id = delete one girlImage

POST -> /api/images/:id/like = like image
DELETE -> /api/images/:id/like = unlike image

POST -> /api/images/:id/comment = comment image
DELETE -> /api/images/:id/comment/:commentid = delete comment
<!-- User -->
<!-- UpdateUserName, UpdateUserEmail, UpdateUserAvatar, UpdateUserPassword (nên làm riêng 4 cái này chứ không nên gộp chung 1 hàm như image)
+ DeleteUser -->
URL : api/users/
POST -> /api/users/ = create new user  = create new user
GET -> /api/users/?page = read all user = read all user
GET -> /api/users/:id = read one user = read one user


PUT -> /api/users/username/:id = update user name
PUT -> /api/users/email/:id = update email
PUT -> /api/users/avatar:/id = update avatar
PUT -> /api/users/password:/id = update password


DELETE -> api/user/:id = delete user (unactive)




### 4. Cooked Data
- /api/images/
  - _id
  - ImageUrl
  - Title
  - Description
  - CreatedAt
  - CreatedBy
  - View
  - Like
  
- /api/images/:id
  - _id
  - ImageUrl
  - Title
  - Description
  - CreatedAt
  - CreatedBy
  - View
  - Like
  - Comment
    - CreatedBy
    - Content