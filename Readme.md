# User Route

1.http://localhost:5000/api/v1/auth/signup (POST)
2.http://localhost:5000/api/v1/users (GET all users)
3.http://localhost:5000/api/v1/users/648ee2fcdf13598b78c21a3a (GET single user)
4.http://localhost:5000/api/v1/users/648ee2fcdf13598b78c21a3a (UPDATE user)
5.http://localhost:5000/api/v1/users/648ee2fcdf13598b78c21a3a (DELETE user)

# Cow Routes

1.http://localhost:5000/api/v1/cows (POST)
2.http://localhost:5000/api/v1/cows (GET all cow)
3.http://localhost:5000/api/v1/cows/648dc519953e3ff4246cfd20 (GET single cow)
4.http://localhost:5000/api/v1/cows/648dcb27a9dc29c9e5bb60fd (Update cow)
5.http://localhost:5000/api/v1/cows/648ee505df13598b78c21a43 (Delete cow)

# Pagination and Filtering routes of Cows

1.http://localhost:5000/api/v1/cows?page=1&limit=10
2.http://localhost:5000/api/v1/cows?sortBy=price&sortOrder=desc
3.http://localhost:5000/api/v1/cows?location=Rajshahi
4.http://localhost:5000/api/v1/cows?searchTerm=raj
5.http://localhost:5000/api/v1/cows?minPrice=1000&maxPrice=5000
