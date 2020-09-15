# README


# Fakebook
[Fakebook](https://fakebook-kodi.herokuapp.com/#/login) is a clone of the popular social media site [Facebook](https://www.facebook.com). Here users can connect with others (make friends),post on each others walls and upload profile and cover photos.  

## Technologies 

* React/Redux
* Ruby on Rails
* PostgreSQL
* Javascript
* JQuery (ajax)
* Heroku
* CSS
* Webpack
* Amazon Web Service

[Design Docs](https://github.com/kshiflett88/fakebook/wiki) 

## Key Features

1. User Authentication 
1. Making Your Profile
2. Making friends
3. Posting On Walls

### User Authentication
New users can signup and make an account fast and easy! All they need is a username, email and password(6 characters or more)
<img src="https://github.com/kshiflett88/fakebook/blob/master/read_me/signup.gif" width="1000" height="600">
For our existing users, logging in is as simple as typing in your username and password. Both log in and sign up will bring you straight to your user page.
<img src="https://github.com/kshiflett88/fakebook/blob/master/read_me/login.gif" width="1000" height="600">

### Making Your Profile
No social media app is complete without a nice profile and cover photo. Changing these is easy todo. If you dont have one up yet Fakebook has placed a default one photo for you.
<img src="https://github.com/kshiflett88/fakebook/blob/master/read_me/edit_photo.gif" width="1000" height="600">


### Making Friends
Making friends is very easy to do as well. You can visit the home page and see all of the users that are on Fakebook. By clicking on their username and going to their page you will find a button to add them as a friend if not already.
<img src="https://github.com/kshiflett88/fakebook/blob/master/read_me/request_friend.gif" width="1000" height="600">

Once the request is sent you can also change your mind (it happens sometimes) and simply press the 'delete request' button where the add friend was.

Accepting a friend is easy to do and you will find requests on your user page. It's as simple as 'add' or 'deny'. As soon as you add they will be in your friends box, instantly!
<img src="https://github.com/kshiflett88/fakebook/blob/master/read_me/add_friend.gif" width="1000" height="600">
If you ever want to delete a friend you cant also unfriend by going to their page clicking the "friends" button and instantly the friendship is ended.

### Posting On Walls

Social media app wouldn't be complete without talking to eachother and posting on walls. You can easily post on your own wall and others! Very simple to do. 
<img src="https://github.com/kshiflett88/fakebook/blob/master/read_me/post.gif" width="1000" height="600">
If you ever have one of those nights and make some regrettable posts, FEAR NOT! Fakebook has your back! You can delete posts before it's too late. 

## Snippets 
The  `friendRequestButton` is a simple feature that can be found on every users page and on each page it may look different. On a the current users (the user who is logged in) the button will say `Edit Profile`. When on another user's page if you are not friends with them it will say `Add Friend`. If you have sent a request already and it has not been answered it will say `Delete Request` and finally if you are both friends it will say `Friends`. The following code here is what determines that simple yet crutial feature to Fakebook. 

`render() {
    const { createFriendRequest, deleteFriendRequest, addFriendship, deleteFriendship, user, currentUser} = this.props;
    // On another users page and you are not their friend
    let buttonText = (<><FaPlus /> Add Friend</>)
    let buttonClick = this.handleAddRequest

  
    user.requesters.forEach(requester => {
      
      // On friends request has been sent
      if (Object.values(requester).includes(currentUser.id)) {
        buttonText = (<><FaEraser /> Delete Request</>)
        buttonClick = this.handleDeleteRequest
      }
    })
    
    // On the current users page
    if (user.id === currentUser.id) {
    buttonText = (<><FaPencilAlt/> Edit Profile</>)
    buttonClick = null
  }

    //If current user is users friend
    user.friends.forEach(friend => {
      if (Object.values(friend).includes(currentUser.id)) {
        buttonText = (<><FaCheck />Friends</>)
        buttonClick = this.handleDeleteFriendship
      }
    })

    return(
      <div>
        <button id="edit-profile" onClick={buttonClick}>{buttonText}</button>
      </div>
    )
  }
}`

## Maintainers

@kshiflett88

## License

© 2020 Kodi Shiflett


## Design Documents

[Design Docs](https://github.com/kshiflett88/fakebook/wiki) 
