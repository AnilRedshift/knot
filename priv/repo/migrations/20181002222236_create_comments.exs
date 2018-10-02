defmodule Knot.Repo.Migrations.CreateComments do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :author, :string
      add :content, :string

      timestamps(type: :timestamptz)
    end

  end
end
