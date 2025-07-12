using Microsoft.EntityFrameworkCore;

namespace Venus.Infrastructure;

public class VenusDbContext(DbContextOptions<VenusDbContext> options) : DbContext(options) {
}