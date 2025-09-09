import { AttendanceCard } from "@/components/AttendanceCard";
import { UserPlus, Clock, History } from "lucide-react";

const Index = () => {
  const handleRegister = () => {
    console.log("Navigate to register");
  };

  const handleAttendance = () => {
    console.log("Navigate to attendance");
  };

  const handleHistory = () => {
    console.log("Navigate to history");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Attendance Management
              <span className="block text-primary-foreground/90">System</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
              Streamline your attendance tracking with our comprehensive management system. 
              Register users, track attendance, and view detailed history reports all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Manage Attendance Efficiently
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose from our core features to get started with attendance management
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <AttendanceCard
              title="Register Users"
              description="Add new users to the attendance system. Set up profiles, roles, and permissions for comprehensive user management."
              icon={UserPlus}
              variant="register"
              onClick={handleRegister}
            />
            
            <AttendanceCard
              title="Mark Attendance"
              description="Quick and easy attendance marking for all registered users. Real-time tracking with timestamp verification."
              icon={Clock}
              variant="attendance"
              onClick={handleAttendance}
            />
            
            <AttendanceCard
              title="View History"
              description="Access detailed attendance reports and analytics. Filter by date, user, or department for comprehensive insights."
              icon={History}
              variant="history"
              onClick={handleHistory}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted by Organizations Worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Join thousands of companies using our attendance management system
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-card p-8 shadow-card">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Users Registered</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary">50,000+</dd>
              </div>
              <div className="flex flex-col bg-card p-8 shadow-card">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Daily Check-ins</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-accent">200,000+</dd>
              </div>
              <div className="flex flex-col bg-card p-8 shadow-card">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Organizations</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-warning">1,500+</dd>
              </div>
              <div className="flex flex-col bg-card p-8 shadow-card">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Uptime</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary">99.9%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-sm leading-5 text-muted-foreground">
              © 2024 Attendance Management System. All rights reserved.
            </p>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-muted-foreground">
              Streamline your workforce management
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;