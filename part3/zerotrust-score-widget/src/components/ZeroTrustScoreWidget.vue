<template>
  <v-container>
    <v-card>
      <!-- Title Section -->
      <v-card-title>
        Zero-Trust Score for {{ data.companyName }}
      </v-card-title>

      <!-- Overall Zero-Trust Score Section -->
      <v-card-subtitle>
        Overall Zero-Trust Score: <strong>{{ data.ZeroTrustScore }}</strong>
        <v-progress-linear
          :value="data.ZeroTrustScore"
          height="30"
          :color="getOverallScoreColor(data.ZeroTrustScore)"
          class="mt-2"
        >
          <template #default>
            {{ data.ZeroTrustScore }}%
          </template>
        </v-progress-linear>
      </v-card-subtitle>

      <v-divider></v-divider>

      <!-- Metrics List Section -->
      <v-list>
          <!-- Loop through each metric and display its name, score, description, and progress bar -->
          <v-list-item v-for="(metric, key) in data.metrics" :key="key">
              <v-list-item-title>{{ key }}</v-list-item-title>
              <v-list-item-subtitle>
                Score: {{ metric.score }} - {{ metric.description }}
              </v-list-item-subtitle>
              <v-progress-linear
                :value="metric.score"
                height="20"
                :color="getMetricColor(metric.score)"
              >
                <template #default>
                  {{ metric.score }}%
                </template>
              </v-progress-linear>
          </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- Observable Data Section -->
      <v-card-text>
        <v-card>
          <v-list>
            <v-list-item>
                <!-- Display observable data points -->
                <v-list-item-title><strong>Average Shannon Entropy Score:</strong> {{ data.observableData.averageShannonEntropyScore }}</v-list-item-title>
                <v-list-item-title><strong>Firewall Detected:</strong> {{ data.observableData.firewallDetected ? 'Yes' : 'No' }}</v-list-item-title>
                <v-list-item-title><strong>DNSSEC Enabled:</strong> {{ data.observableData.DNSsecEnabled ? 'Yes' : 'No' }}</v-list-item-title>
                <v-list-item-title><strong>TLS Version:</strong> {{ data.observableData.tlsVersion }}</v-list-item-title>
                <v-list-item-title><strong>Certificate Bit Strength:</strong> {{ data.observableData.certificateBitStrength }}</v-list-item-title>
                <v-list-item-title><strong>Open Ports Detected:</strong> {{ data.observableData.openPortsDetected }}</v-list-item-title>
                <v-list-item-title><strong>Security Headers Implemented:</strong> {{ data.observableData.securityHeadersImplemented.join(', ') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Risk Category Section -->
      <v-card-subtitle>
        Risk Category: <strong>{{ data.riskCategory }}</strong>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {
        "companyName": "FinTechSecure Ltd.",
        "ZeroTrustScore": 58.5,
        "metrics": {
          "NetworkSecurity": { "score": 80, "description": "Measures the security of the network infrastructure." },
          "EndpointProtection": { "score": 75, "description": "Indicates the effectiveness of endpoint security solutions." },
          "DataProtection": { "score": 60, "description": "Evaluates the measures in place to protect sensitive data." },
          "IdentityManagement": { "score": 85, "description": "Assesses the controls around user identity and access management." },
          "ApplicationSecurity": { "score": 55, "description": "Measures the security of applications and software." },
          "Compliance": { "score": 70, "description": "Indicates adherence to regulatory and industry standards." },
          "IncidentResponse": { "score": 65, "description": "Evaluates the effectiveness of the incident response plan." }
        },
        "observableData": {
          "averageShannonEntropyScore": 7.8,
          "firewallDetected": true,
          "DNSsecEnabled": true,
          "tlsVersion": "1.2",
          "certificateBitStrength": 2048,
          "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
          "openPortsDetected": 12
        },
        "riskCategory": "Moderate Risk"
      }
    };
  },
  methods: {
    /**
     * Returns a color based on the score of a metric.
     * @param {number} score - The score of a metric.
     * @returns {string} Color name ('green', 'orange', 'red')
     */
    getMetricColor(score) {
      if (score >= 80) {
        return 'green';
      } else if (score >= 60) {
        return 'orange';
      } else {
        return 'red';
      }
    },

    /**
     * Returns a color based on the overall Zero-Trust Score.
     * @param {number} score - The overall Zero-Trust Score.
     * @returns {string} Color name ('green', 'orange', 'red')
     */
    getOverallScoreColor(score) {
      if (score >= 80) {
        return 'green';
      } else if (score >= 60) {
        return 'orange';
      } else {
        return 'red';
      }
    }
  }
};
</script>

<style scoped>
</style>
