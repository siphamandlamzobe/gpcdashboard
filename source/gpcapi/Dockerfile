FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["GPCApi/GPCApi.csproj", "GPCApi/"]
COPY ["GPCApi.Repository/GPCApi.Repository.csproj", "GPCApi.Repository/"]
RUN dotnet restore "GPCApi/GPCApi.csproj"
COPY . .
WORKDIR "/src/GPCApi"
RUN dotnet build "GPCApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GPCApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GPCApi.dll"]