cd buildAndReleaseTask; ../node_modules/typescript/bin/tsc

cd ..
tfx extension create --manifest-globs vss-extension.json

cp -f SrikantNoorani.dx-apm-event-publisher-1.0.0.vsix /tmp 
