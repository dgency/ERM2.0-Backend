module.exports = () => ({
	ckeditor: {
		enabled: true,
	},
	seo: {
		enabled: true,
	},
	// ...
	upload: {
		config: {
			provider: "local",
			providerOptions: {
				localServer: {
					maxage: 300000,
				},
			},
			sizeLimit: 5 * 1024 * 1024, // 5MB
		},
	},
	// ...
});

// eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTE5MzU5OTksImp0aSI6IjIxOWZhNjNlLTgwYjEtNDgwMS1iODYzLWUwZGU4Mjg4NDAxYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiJjMTkzNzhkOCJ9.OW8RY7iQlVQ2fPDRjOVl1Nw9xFK-c9NdR1W-ynYOWLPwEFfClTyTqUPVb_aYXJMTnZTbleid7KY3JVzR-v0BJA
