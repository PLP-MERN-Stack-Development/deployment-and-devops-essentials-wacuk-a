const Sentry = require('@sentry/node');

const initSentry = (app) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
        ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
      ],
      tracesSampleRate: 1.0,
    });

    // RequestHandler must be the first middleware
    app.use(Sentry.Handlers.requestHandler());
    
    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());
  }
};

const errorHandler = () => {
  if (process.env.NODE_ENV === 'production') {
    return Sentry.Handlers.errorHandler();
  }
  return (err, req, res, next) => next(err);
};

module.exports = { initSentry, errorHandler };
