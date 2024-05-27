using Microsoft.EntityFrameworkCore;
using marketplace_api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<MarketplaceContext>(
    options => options.UseSqlite("Data Source=Marketplace.db")
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(
    options=>
    {
        options.AddPolicy("AllowAll",
        builder => builder
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin());
    }
);

var app = builder.Build();
app.UseCors("AllowAll");
DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();