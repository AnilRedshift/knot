defmodule Knot.Schema do

  use Absinthe.Schema
  import_types Knot.Schema.Types

  query do
    @desc "Get a list of comments"
    field :comments, list_of(:comment) do
      resolve &Knot.Resolver.Comment.all/2
    end
  end

end
