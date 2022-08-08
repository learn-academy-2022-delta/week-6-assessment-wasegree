# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController is the child component of ApplicationController. BlogPostsController coodinates the interaction between the user, the views, and the model. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Since we are within the method index, we are making a call to active record. @posts is an instance variable that is being used to access all blog posts within the database.
    @posts = BlogPost.all
  end

  # ---3) The method show is a RESTful route that return one item from the database by id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New is a RESTful route that allows users the ability to add information from the web application that gets stored the database. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is an instance variable that is being given access to the database BlogPost. Create is a Restful route that submits user data to the database to be stored with its own primary key.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) @post is being used to find one item from the database by to be updated by the user. This is achieved by giving access the the primary key via params.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) @post is given params that will allow users to modify which will be refelcted in the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Users will be sent to the landing page or show page if the destroy method is not valid.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This is a method that you can only call from inside the class where it's defined. It allows you to control access to your methods.
  private 
  def blog_post_params
    # ---10) Gives users the ability to only access the databases title and content sections.
    params.require(:blog_post).permit(:title, :content)
  end
end
