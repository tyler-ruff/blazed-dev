defmodule Blazed.Feed.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :user, :string
    field :body, :string
    field :likes, :integer

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:user, :body, :likes])
    |> validate_required([:user, :body, :likes])
  end
end
