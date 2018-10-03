defmodule Knot.Resolver.Comment do
  alias Knot.{Comment, Repo}

  def all(_args, _info) do
    {:ok, Repo.all(Comment)}
  end

  def create(_parent, comment, _context) do
    Comment.changeset(%Comment{}, comment)
    |> Repo.insert()
  end
end
