import * as foam from '@foam-ai/node-opentelemetry';
import { FOAM_COLLECTOR_URL, FOAM_API_KEY, isProduction } from './config/keys';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'pulumi-copilot',
  isProduction,
  endpoint: FOAM_COLLECTOR_URL,
  apiKey: `Bearer ${FOAM_API_KEY}`,
  additionalInstrumentations: [
    new ExpressInstrumentation({}) as unknown as InstrumentationBase,
    new HttpInstrumentation({
      requestHook: (span, request) => {
        span.setAttribute('http.route', request.url);
      },
    }) as unknown as InstrumentationBase,
  ],
});