defmodule Blazed.FeedTest do
  use Blazed.DataCase

  alias Blazed.Feed

  describe "posts" do
    alias Blazed.Feed.Post

    import Blazed.FeedFixtures

    @invalid_attrs %{user: nil, body: nil, likes: nil}

    test "list_posts/0 returns all posts" do
      post = post_fixture()
      assert Feed.list_posts() == [post]
    end

    test "get_post!/1 returns the post with given id" do
      post = post_fixture()
      assert Feed.get_post!(post.id) == post
    end

    test "create_post/1 with valid data creates a post" do
      valid_attrs = %{user: "some user", body: "some body", likes: 42}

      assert {:ok, %Post{} = post} = Feed.create_post(valid_attrs)
      assert post.user == "some user"
      assert post.body == "some body"
      assert post.likes == 42
    end

    test "create_post/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Feed.create_post(@invalid_attrs)
    end

    test "update_post/2 with valid data updates the post" do
      post = post_fixture()
      update_attrs = %{user: "some updated user", body: "some updated body", likes: 43}

      assert {:ok, %Post{} = post} = Feed.update_post(post, update_attrs)
      assert post.user == "some updated user"
      assert post.body == "some updated body"
      assert post.likes == 43
    end

    test "update_post/2 with invalid data returns error changeset" do
      post = post_fixture()
      assert {:error, %Ecto.Changeset{}} = Feed.update_post(post, @invalid_attrs)
      assert post == Feed.get_post!(post.id)
    end

    test "delete_post/1 deletes the post" do
      post = post_fixture()
      assert {:ok, %Post{}} = Feed.delete_post(post)
      assert_raise Ecto.NoResultsError, fn -> Feed.get_post!(post.id) end
    end

    test "change_post/1 returns a post changeset" do
      post = post_fixture()
      assert %Ecto.Changeset{} = Feed.change_post(post)
    end
  end
end
