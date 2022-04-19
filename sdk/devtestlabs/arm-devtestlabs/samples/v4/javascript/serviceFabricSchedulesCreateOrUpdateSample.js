/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DevTestLabsClient } = require("@azure/arm-devtestlabs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or replace an existing schedule.
 *
 * @summary Create or replace an existing schedule.
 * x-ms-original-file: specification/devtestlabs/resource-manager/Microsoft.DevTestLab/stable/2018-09-15/examples/ServiceFabricSchedules_CreateOrUpdate.json
 */
async function serviceFabricSchedulesCreateOrUpdate() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "resourceGroupName";
  const labName = "{labName}";
  const userName = "@me";
  const serviceFabricName = "{serviceFrabicName}";
  const name = "{scheduleName}";
  const schedule = {
    dailyRecurrence: { time: "19:00" },
    hourlyRecurrence: { minute: 0 },
    location: "{location}",
    notificationSettings: {
      emailRecipient: "{email}",
      notificationLocale: "EN",
      status: "{Enabled|Disabled}",
      timeInMinutes: 15,
      webhookUrl: "{webhoolUrl}",
    },
    status: "{Enabled|Disabled}",
    tags: { tagName1: "tagValue1" },
    targetResourceId:
      "/subscriptions/{subscriptionId}/resourceGroups/resourceGroupName/providers/Microsoft.DevTestLab/labs/{labName}/users/{uniqueIdentifier}/servicefabrics/{serviceFrabicName}",
    taskType:
      "{Unknown|LabVmsShutdownTask|LabVmsStartupTask|LabVmReclamationTask|ComputeVmShutdownTask}",
    timeZoneId: "Pacific Standard Time",
    weeklyRecurrence: {
      time: "19:00",
      weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DevTestLabsClient(credential, subscriptionId);
  const result = await client.serviceFabricSchedules.createOrUpdate(
    resourceGroupName,
    labName,
    userName,
    serviceFabricName,
    name,
    schedule
  );
  console.log(result);
}

serviceFabricSchedulesCreateOrUpdate().catch(console.error);
