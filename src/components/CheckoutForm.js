<Form.Input
    fluid
    name="firstname" 
    label='First Name'
    placeholder='John'
/>
<Form.Input 
    fluid 
    name='lastname' 
    label='Last name' 
    placeholder='Smith'
/>
<Form.Input 
    fluid 
    name='email'
    label='Email' 
    placeholder='xyz@example.com'
    type='email'  
/>
<Form.Group>
    <Form.Input 
        width={10} 
        name='street' 
        label='Address' 
        placeholder='122 Example St'   
    />
    <Form.Select
        width={6} 
        name='country' 
        label='Select Country' 
        options={countries}
    />
</Form.Group>
<Form.Group>
    <Form.Input 
        width={6} 
        name='town_city' 
        label='Town/City' 
        placeholder='Las Vegas' 
    />
    <Form.Select
        width={6} 
        label='County/State/Province/Territory' 
        placeholder='Search ...'
        name='county_state' 
        search 
        fluid
        options={getCountryInfoShipping()}
    />
    <Form.Input
        width={4} 
        type='number'
        name='postal_zip_code' 
        label='Zip/Postal' 
        placeholder='00000'
    />
</Form.Group>
