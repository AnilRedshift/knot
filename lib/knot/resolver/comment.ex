defmodule Knot.Resolver.Comment do
  alias Knot.{Comment, Repo}

  def all(_args, _info) do
    {:ok, Repo.all(Comment)}
  end
end
