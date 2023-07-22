defmodule Blazed.FeedFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Blazed.Feed` context.
  """

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ %{}) do
    {:ok, post} =
      attrs
      |> Enum.into(%{
        user: "some user",
        body: "some body",
        likes: 42
      })
      |> Blazed.Feed.create_post()

    post
  end
end
