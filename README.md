api needed:
1. /users - to get all user. each user will have name, email, photourl, role property.
users = [{ name, email, photourl, role}]

2. /packages/all - to get all package
packages = [{title, type, photo,price, description}]

3. /package/:packageId - to get specific package details by package id
package = {title, type, photo,price, description}

4. /guides/all - to get all guides list. from users, filter th entities with role=guide. add rating property

5. /guide/:guideId - to get specific guide

6. /book-package/:packageId - book a package

7. /packages/add - for admin to add new package

8. /bookings/all
 /bookings/:email

 9. /wishlist/all
 /wishlist/:email



* tour type
* story/all - add story
