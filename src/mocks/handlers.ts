import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "/content-dashboard/project/content-niche-county-code",
    ({ request }) => {
      const url = new URL(request.url);
      const projectId = url.searchParams.get("project_id");

      return HttpResponse.json({
        success: true,
        message: "Project content settings loaded",
        project_id: projectId || "proj_1042",
        content_niche: "insurance",
        country_code: "IN",
      });
    },
  ),
  http.get("/cv/guidelines/readiness", () => {
    return HttpResponse.json({
      success: true,
      project_id: "proj_1042",
      guideline_id: 81,
      is_ready: true,
      has_brand_guideline: true,
      has_interlink_rule: true,
      rules_generated: true,
      // You can expand this to include the full dummy JSON payload from your docs
    });
  }),
  http.get("/user/my-profile", () => {
    return HttpResponse.json({
      success: true,
      id: 7,
      name: "Siddhesh",
      role: "executive",
      department: "seo",
    });
  }),

  http.post("/content/create", async ({ request }) => {
    const formData = await request.formData();

    // Extracting fields exactly as they are sent over the wire
    const primaryKeyword = formData.get("primary_keyword");
    const flowNumber = formData.get("flow_number");
    const isReoptimization = formData.get("is_reoptimization");

    console.log(
      `Simulating submission for flow ${flowNumber} with keyword: ${primaryKeyword}; reoptimization: ${isReoptimization}`,
    );

    // Simulate network delay so your UI loading states actually trigger
    await new Promise((resolve) => setTimeout(resolve, 800));

    return HttpResponse.json(
      {
        success: true,
        message: "Content successfully created",
      },
      { status: 201 },
    );
  }),
];
