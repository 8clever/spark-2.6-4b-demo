bun .secure/harness.ts \
    --model Spark-X2.6-4B-Q8_0 \
    --url http://host.docker.internal:9931/v1 \
    --api-key none \
    --type openai \
    --goal-path .secure/goal_website.md