defmodule Blazed.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      BlazedWeb.Telemetry,
      # Start the Ecto repository
      Blazed.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Blazed.PubSub},
      # Start Finch
      {Finch, name: Blazed.Finch},
      # Start the Endpoint (http/https)
      BlazedWeb.Endpoint
      # Start a worker by calling: Blazed.Worker.start_link(arg)
      # {Blazed.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Blazed.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    BlazedWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
