using System;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

using Jodas.API.Services;
using System.Text.Json.Serialization;

namespace Jodas.API;

public class Startup
{

    public IConfiguration _configuration { get; }
    public IWebHostEnvironment _hostingEnvironment { get; }
    public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment)
    {
        _configuration = configuration;
        _hostingEnvironment = hostingEnvironment;
    }

    public void ConfigureServices(IServiceCollection services)
	{
		services.AddControllers()
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });
        services.AddEndpointsApiExplorer();
		services.AddSwaggerGen();
        services.AddCors(options =>
        {
            options.AddPolicy("NextApp", builder =>
            {
                builder.WithOrigins(_configuration["frontend_url"])
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
        });

        ConfigureThirdServices(services);
    }

	public void Configure(IApplicationBuilder app)
	{
        if (_hostingEnvironment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseCors("NextApp");

        app.UseHttpsRedirection();

        app.UseRouting();
        app.UseAuthorization();

		app.UseEndpoints(endpoints =>
		{
			endpoints.MapControllers();
		});
    }
    public void ConfigureThirdServices(IServiceCollection services)
    {
        string mongoDBConnectionString = _configuration.GetConnectionString("MongoDB");

        services.AddSingleton<IMongoClient>(provider =>
        {
            return new MongoClient(mongoDBConnectionString);
        });

        services.AddSingleton<IHandleUserRequest, HandleUserRequest>();
        services.AddSingleton<IHandleEventRequest, HandleEventRequest>();
    }
}

