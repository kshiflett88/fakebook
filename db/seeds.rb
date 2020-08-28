# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

demo = User.create( id: 1, username: 'Kreator', email: 'kodikreator', password: '123456', authored_post_ids: [9], wall_post_ids: [1, 9], requestees: [], requesters: [], profile_photo: , cover_photo: )
Rengoku = User.create( id: 2, username: "Rengoku", email: "fire", password: "123456", authored_post_ids: [2], wall_post_ids: [2, 4], requestees: [], requesters: [], profile_photo: , cover_photo: )
San = User.create(id: 3, username: "San", email: "Moro", password: "123456", authored_post_ids: [1], wall_post_ids: [8], requestees: [], requesters: [], profile_photo: , cover_photo: )
Chihiro = User.create(id: 4, username: "Chihiro", email: "dragon", password: "123456", authored_post_ids: [3, 8], wall_post_ids: [3], requestees: [], requesters: [], profile_photo: , cover_photo: )
Natsu = User.create(id: 5, username: "Natsu", email: "igneel", password: "123456", authored_post_ids: [4], wall_post_ids: [], requestees: [], requesters: [], profile_photo: , cover_photo: )
Kocho = User.create(id: 6, username: "Kocho", email: "butterfly", password: "123456", authored_post_ids: [5], wall_post_ids: [], requestees: [], requesters: [], profile_photo: , cover_photo: )
Legosi = User.create(id: 7, username: "Legosi", email: "bunny", password: "123456", authored_post_ids: [6], wall_post_ids: [6], requestees: [], requesters: [], profile_photo: , cover_photo: )
Zenitsu = User.create(id: 8, username: "Zenitsu", email: "lightening". password: "123456", authored_post_ids: [7], wall_post_ids: [2, 7], requestees: [], requesters: [], profile_photo: , cover_photo: )

post1 = Post.create( id: 1, body: "ASHITAAAAAKKAAA!", author_id: 3, wall_id: 1, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post2 = Post.create( id: 2, body: "Train Harder!" , author_id: 2, wall_id: 8, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post3 = Post.create( id: 3, body: "This bath house aint so bad...", author_id: 4, wall_id: 4, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post4 = Post.create( id: 4, body: "I'm fired up!", author_id: 5, wall_id: 2, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post5 = Post.create( id: 5, body: ".....?", author_id: 6, wall_id: 2, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post6 = Post.create( id: 6, body: "I Love you Haru Chan!", author_id: 7, wall_id: 7, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post7 = Post.create( id: 7, body: "Nezuko!!!", author_id: 8, wall_id: 8, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post8 = Post.create( id: 8, body: "狼が大好き", author_id: ４, wall_id: ３, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
post9 = Post.create( id: 9, body: "Welcome to my app!", author_id: 1, wall_id: 1, created_at: "2020-08-28T05:45:56.507Z", updated_at: "2020-08-28T05:45:56.507Z" )
