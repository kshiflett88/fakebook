# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# Post.destroy_all

u1 = User.create( username: 'Kreator', email: 'kodikreator', password: '123456')
# u2 = User.create( username: "Rengoku", email: "fire", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )
# u3 = User.create( username: "San", email: "Moro", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )
# u4 = User.create( username: "Chihiro", email: "dragon", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )
# u5 = User.create( username: "Natsu", email: "igneel", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )
# u6 = User.create( username: "Kocho", email: "butterfly", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )
# u7 = User.create( username: "Legosi", email: "bunny", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )
# u8 = User.create( username: "Zenitsu", email: "lightening", password: "123456", authored_post_ids: [], wall_post_ids: [], requestees: [], requesters: [], profile_photo: "" , cover_photo: "" )

# p1 = Post.create( body: "ASHITAAAAAKKAAA!", author_id: u3.id, wall_id: u1.id )
# p2 = Post.create( body: "Train Harder!" , author_id: u2.id, wall_id: u8.id )
# p3 = Post.create( body: "This bath house aint so bad...", author_id: u4.id, wall_id: u4.id )
# p4 = Post.create( body: "I'm fired up!", author_id: u5.id, wall_id: u2.id )
# p5 = Post.create( body: ".....?", author_id: u6.id, wall_id: u2.id )
# p6 = Post.create( body: "I Love you Haru Chan!", author_id: u7.id, wall_id: u7.id )
# p7 = Post.create( body: "Nezuko!!!", author_id: u8.id, wall_id: u8.id )
# p8 = Post.create( body: "狼が大好き", author_id: u４.id, wall_id: u３.id )
# p9 = Post.create( body: "Welcome to my app!", author_id: u1.id, wall_id: u1.id )

# u1.authored_post_ids= [p9.id]
# u1.wall_post_ids= [p1.id, p9.id]

# u2.authored_post_ids= [p2.id]
# u2.wall_post_ids= [p2.id, p4.id]

# u3.authored_post_ids = [p1.id] 
# u3.wall_post_ids = [p8.id]

# u4.authored_post_ids = [p3.id, p8.id]
# u4.wall_post_ids = [p3.id]

# u5.authored_post_ids = [p4.id]

# u6.authored_post_id =  [p5.id]

# u7.authored_post_ids= [p6.id]
# u7.wall_post_ids= [p6.id]

# u8.authored_post_ids= [p7.id]
# u8.wall_post_ids= [p2.id, p7.id]
