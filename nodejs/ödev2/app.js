const posts = ['ilk', 'iki', 'uc'];
const arguments = process.argv.slice(2);
const post = arguments[0]

const listPosts = () => {
  for (let i = 0; i < posts.length; i++){
    console.log(`${i+1}.post: ${posts[i]}`);
  }
};

const addPost = (newPost) => {
  if(newPost){
    posts.push(newPost);
    return posts;
  } else {
    return console.log('Post girilmedi')
  }
}

async function showPosts() {
  try {
    await addPost(post);
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();