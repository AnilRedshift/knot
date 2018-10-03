defmodule Knot.Schema do
  alias Knot.Resolver
  use Absinthe.Schema
  import_types Knot.Schema.Types

  query do
    @desc "Get a list of comments"
    field :comments, list_of(:comment) do
      resolve &Resolver.Comment.all/2
    end
  end

  mutation do
    @desc "Create a new comment"
    field :create_comment, type: :comment do
      arg :author, non_null(:string)
      arg :content, non_null(:string)
      resolve &Resolver.Comment.create/3
    end
  end
end
